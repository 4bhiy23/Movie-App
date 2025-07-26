import React from 'react'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", `${import.meta.env.VITE_EMAIL_API_KEY}`);

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
    <div className='min-h-[80vh] flex items-center justify-center '>
      <form onSubmit={onSubmit}>
        <div className='w-[70vw] flex flex-col gap-6 rounded-2xl text-white'>
          <div className='flex justify-between gap-3'>
            <input type="text"
            placeholder='Your Name' 
            name='name'
            className='w-full border-2 border-white rounded-full p-3'
            />
            <input type="email"
            placeholder='Your Email'
            name='email'
            className='w-full border-2 border-white rounded-full p-3'
            />
          </div>

          <textarea name="message" 
            className='p-3 border-2 border-white rounded-4xl'
            placeholder='Your Message'
            required
          ></textarea>

          <button type="submit" className='bg-red-600 self-center rounded-full p-3 w-1/4 cursor-pointer'>Send</button>
        </div>
      </form>
      <span>{result}</span>

    </div>
  )
}

export default Contact
