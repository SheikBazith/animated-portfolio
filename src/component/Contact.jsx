import React from 'react'

export default function Contact() {
    const [result, setResult] = React.useState("Submit");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "954820c1-9a41-4441-b829-b61cd68405bd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
    
  return (
    <div className='contact flex flex-col md:flex-row gap-4 md:justify-center md:items-center'>
    <div className='flex-1 gap-12 flex flex-col'>
    <h2 className='font-black text-4xl'>Get in Touch</h2>
    <p className='text-xl'>Have a question or a project in mind? I'd love to hear from you. Let's chat and make something amazing together.</p>
    <div className='flex flex-col gap-8'>
    <div className='flex gap-6'>
      <img className='w-[25px]' src='/images/social-icon/phone-icon.webp'/>
      <p>+91 7406010515</p>
    </div>

    <div className='flex gap-6'>
      <img className='w-[25px]' src='/images/social-icon/mail-icon.webp'/>
      <p>shkbaz@gmail.com</p>
    </div>

    <div className='flex gap-6'>
      <img className='w-[25px]' src='/images/social-icon/location-icon.webp'/>
      <p>Bengaluru, India</p>
    </div>
    </div>
    </div>
       <div className='flex-1'>
       <form onSubmit={onSubmit}>
            <div className='input-box'>
                <input type='text' className='field' placeholder='Name' name='name' required />
            </div>

            <div className='input-box'>
                <input type='email' className='field' placeholder='Email' name='email' required />
            </div>

            <div className='input-box'>
                <textarea name='message' className='field msg' placeholder='Your Message' required/>
            </div>
            <button type='submit'>{result}</button>
        </form>
       </div>
    </div>
  )
}
