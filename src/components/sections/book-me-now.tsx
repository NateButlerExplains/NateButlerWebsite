'use client'

import { useState, FormEvent, ChangeEvent } from 'react'
import styles from './book-me-now.module.css'

interface FormData {
  name: string
  email: string
  'event-type': string
  'event-date': string
  location: string
  budget: string
  message: string
}

interface FormErrors {
  [key: string]: string
}

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'YOUR_FORMSPREE_ID'

export default function BookMeNow() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    'event-type': '',
    'event-date': '',
    location: '',
    budget: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({})
  const [loading, setLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const validateDate = (date: string): boolean => {
    if (!date) return false
    const selectedDate = new Date(date)
    const today = new Date()
    const minDate = new Date(today.setDate(today.getDate() + 30))
    return selectedDate >= minDate
  }

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        return !value ? 'Full name is required' : value.length > 100 ? 'Name must be 100 characters or less' : ''
      case 'email':
        return !value ? 'Email is required' : !validateEmail(value) ? 'Invalid email address' : ''
      case 'event-type':
        return !value ? 'Event type is required' : ''
      case 'event-date':
        return !value ? 'Event date is required' : !validateDate(value) ? 'Event date must be at least 30 days from today' : ''
      case 'location':
        return !value ? 'Event location is required' : value.length > 200 ? 'Location must be 200 characters or less' : ''
      case 'budget':
        return !value ? 'Budget range is required' : ''
      case 'message':
        return !value ? 'Message is required' : value.length > 1000 ? 'Message must be 1000 characters or less' : ''
      default:
        return ''
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))

    if (touched[name]) {
      const error = validateField(name, value)
      setErrors(prev => ({
        ...prev,
        [name]: error,
      }))
    }
  }

  const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setTouched(prev => ({
      ...prev,
      [name]: true,
    }))

    const error = validateField(name, value)
    setErrors(prev => ({
      ...prev,
      [name]: error,
    }))
  }

  const checkFormValid = (): boolean => {
    let isValid = true
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value)
      if (error) isValid = false
    })
    return isValid
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newErrors: FormErrors = {}
    let isValid = true

    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value)
      if (error) {
        newErrors[key] = error
        isValid = false
      }
    })

    setErrors(newErrors)

    if (!isValid) {
      return
    }

    setLoading(true)
    try {
      const formElement = e.currentTarget
      const formDataObj = new FormData(formElement)

      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: formDataObj,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setSubmitStatus('success')
        setSubmitMessage('Thank you! We\'ll respond within 24 hours')
        setFormData({
          name: '',
          email: '',
          'event-type': '',
          'event-date': '',
          location: '',
          budget: '',
          message: '',
        })
        setTouched({})
        setErrors({})

        setTimeout(() => {
          setSubmitStatus('idle')
        }, 2000)
      } else {
        setSubmitStatus('error')
        setSubmitMessage('Failed to submit. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const FormField = ({
    label,
    name,
    type = 'text',
    value,
    onChange,
    onBlur,
    error,
    required = true,
    maxLength,
    options,
  }: {
    label: string
    name: string
    type?: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void
    onBlur: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void
    error?: string
    required?: boolean
    maxLength?: number
    options?: { value: string; label: string }[]
  }) => (
    <div className={styles.formGroup}>
      <label htmlFor={name} className={styles.label}>
        {label}
        {required && <span className={styles.required}>*</span>}
      </label>
      {type === 'select' ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={`${styles.input} ${error && touched[name] ? styles.inputError : ''}`}
        >
          <option value="">Select {label}</option>
          {options?.map(opt => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          maxLength={maxLength}
          className={`${styles.input} ${styles.textarea} ${error && touched[name] ? styles.inputError : ''}`}
          rows={5}
        />
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          maxLength={maxLength}
          className={`${styles.input} ${error && touched[name] ? styles.inputError : ''}`}
        />
      )}
      {error && touched[name] && <p className={styles.error}>{error}</p>}
    </div>
  )

  return (
    <section className={styles.container} id="book-me-now">
      <div className={styles.wrapper}>
        <h2 className={styles.headline}>Book Me Now</h2>
        <p className={styles.subheadline}>
          Ready to bring authoritative insights to your event? Fill out this form and we&apos;ll get back to you within 24 hours.
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <FormField
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.name}
            maxLength={100}
          />

          <FormField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email}
          />

          <FormField
            label="Event Type"
            name="event-type"
            type="select"
            value={formData['event-type']}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors['event-type']}
            options={[
              { value: 'keynote', label: 'Keynote' },
              { value: 'workshop', label: 'Workshop' },
              { value: 'consulting', label: 'Consulting' },
              { value: 'other', label: 'Other' },
            ]}
          />

          <FormField
            label="Event Date"
            name="event-date"
            type="date"
            value={formData['event-date']}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors['event-date']}
          />

          <FormField
            label="Event Location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.location}
            maxLength={200}
          />

          <FormField
            label="Budget Range"
            name="budget"
            type="select"
            value={formData.budget}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.budget}
            options={[
              { value: 'under-5k', label: 'Under $5k' },
              { value: '5k-10k', label: '$5k - $10k' },
              { value: '10k-25k', label: '$10k - $25k' },
              { value: '25k-plus', label: '$25k+' },
            ]}
          />

          <FormField
            label="Tell us about your event"
            name="message"
            type="textarea"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.message}
            maxLength={1000}
          />

          <button
            type="submit"
            disabled={loading || !checkFormValid()}
            className={`${styles.button} ${loading ? styles.buttonLoading : ''}`}
          >
            {loading ? (
              <>
                <span className={styles.spinner}></span>
                Sending...
              </>
            ) : (
              'Send Booking Request'
            )}
          </button>

          {submitStatus === 'success' && (
            <div className={styles.successMessage}>{submitMessage}</div>
          )}

          {submitStatus === 'error' && (
            <div className={styles.errorMessage}>{submitMessage}</div>
          )}
        </form>
      </div>
    </section>
  )
}
