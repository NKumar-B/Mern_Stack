import React, { useState } from 'react'

function Forms() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    gender: '',
    skills: ''
  })

  const [submittedData, setSubmittedData] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmittedData(formData)
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>User Registration Form</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          {/* Name */}
          <div style={styles.fieldGroup}>
            <label style={styles.label} htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Nithin Kumar"
              value={formData.name}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          {/* Email */}
          <div style={styles.fieldGroup}>
            <label style={styles.label} htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="nithinkumarbadduluri@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          {/* Password */}
          <div style={styles.fieldGroup}>
            <label style={styles.label} htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="******"
              value={formData.password}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          {/* Phone */}
          <div style={styles.fieldGroup}>
            <label style={styles.label} htmlFor="phone">Phone:</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="6281144047"
              value={formData.phone}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          {/* Gender (Radio Buttons) */}
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Gender:</label>
            <div style={styles.radioGroup}>
              <label style={styles.radioLabel}>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === 'Male'}
                  onChange={handleChange}
                  required
                />
                Male
              </label>
              <label style={styles.radioLabel}>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === 'Female'}
                  onChange={handleChange}
                  required
                />
                Female
              </label>
              <label style={styles.radioLabel}>
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  checked={formData.gender === 'Other'}
                  onChange={handleChange}
                  required
                />
                Other
              </label>
            </div>
          </div>

          {/* Skills (Dropdown) */}
          <div style={styles.fieldGroup}>
            <label style={styles.label} htmlFor="skills">Skills:</label>
            <select
              id="skills"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              required
              style={styles.select}
            >
              <option value="" disabled>-- Select a Skill --</option>
              <option value="React">React</option>
              <option value="Node.js">Node.js</option>
              <option value="Express">Express</option>
              <option value="MongoDB">MongoDB</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
            </select>
          </div>

          {/* Submit Button */}
          <button type="submit" style={styles.button}>
            Submit
          </button>
        </form>
      </div>

      {/* Submitted Details Display Section */}
      {submittedData && (
        <div style={styles.detailsCard}>
          <h3 style={styles.detailsHeading}>Submitted User Details</h3>
          <div style={styles.detailsGrid}>
            <div style={styles.detailItem}>
              <strong>Name:</strong> {submittedData.name}
            </div>
            <div style={styles.detailItem}>
              <strong>Email:</strong> {submittedData.email}
            </div>
            <div style={styles.detailItem}>
              <strong>Password:</strong> {submittedData.password}
            </div>
            <div style={styles.detailItem}>
              <strong>Phone:</strong> {submittedData.phone}
            </div>
            <div style={styles.detailItem}>
              <strong>Gender:</strong> {submittedData.gender}
            </div>
            <div style={styles.detailItem}>
              <strong>Skills:</strong> {submittedData.skills}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Inline Styles for sleek design
const styles = {
  container: {
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f7f6',
    padding: '30px 20px',
    boxSizing: 'border-box'
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
    padding: '35px 40px',
    width: '100%',
    maxWidth: '480px',
    marginBottom: '30px'
  },
  heading: {
    marginTop: 0,
    marginBottom: '24px',
    color: '#2c3e50',
    textAlign: 'center',
    fontSize: '24px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px'
  },
  fieldGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px'
  },
  label: {
    fontWeight: '600',
    color: '#34495e',
    fontSize: '14px'
  },
  input: {
    padding: '10px 14px',
    borderRadius: '6px',
    border: '1px solid #cccccc',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s ease'
  },
  radioGroup: {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
    marginTop: '4px'
  },
  radioLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '14px',
    color: '#2c3e50',
    cursor: 'pointer'
  },
  select: {
    padding: '10px 14px',
    borderRadius: '6px',
    border: '1px solid #cccccc',
    fontSize: '14px',
    backgroundColor: '#ffffff',
    outline: 'none',
    cursor: 'pointer'
  },
  button: {
    marginTop: '10px',
    padding: '12px',
    backgroundColor: '#4a90e2',
    color: '#ffffff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease'
  },
  detailsCard: {
    backgroundColor: '#e8f4fd',
    borderRadius: '12px',
    border: '1px solid #b6e0fe',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    padding: '25px 30px',
    width: '100%',
    maxWidth: '480px'
  },
  detailsHeading: {
    marginTop: 0,
    marginBottom: '16px',
    color: '#1a5276',
    textAlign: 'center',
    fontSize: '20px'
  },
  detailsGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  detailItem: {
    fontSize: '15px',
    color: '#2874a6',
    padding: '8px 12px',
    backgroundColor: '#ffffff',
    borderRadius: '6px',
    border: '1px solid #d4e6f1'
  }
}

export default Forms  