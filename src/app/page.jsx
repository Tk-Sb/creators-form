'use client'

export default function Home() {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    
    try {
      await fetch(form.action, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });
      // Redirect after successful submission
      window.location.href = '/' // Your custom success page
    } catch (error) {
      console.error('Error:', error)
      // Handle error case
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} action="https://docs.google.com/forms/d/e/1FAIpQLSd057zq5_tY0D7xCrtiKeJZGQC1DBn4zTjOAxPWyFM-pDnGqA/formResponse">
          <select name="entry.2123345968" >
            <option value="beginner">
              beginner
            </option>
            <option value="elite">
              elite
            </option>
            <option value="pro">
              pro
            </option>
          </select>
          <input type="submit" />
        </form>
      </div>
    </>
  );
}