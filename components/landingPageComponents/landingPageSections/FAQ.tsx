import React from 'react'
import FAQComp from '../FAQComp'

const FAQ = () => {
    const title = "Lorem ipsum dolor sit amet consectetur?";
  return (
    <section className='flex flex-col items-center gap-14 py-12 px-4 sm:px-auto'>
        <p className='font-bold text-2xl'>Frequently Asked Questions (FAQs)</p>

        <div className='grid gap-4'>
            <FAQComp title={title} content={title} />
            <FAQComp title={title} content={title} />
            <FAQComp title={title} content={title} />
            <FAQComp title={title} content={title} />
            <FAQComp title={title} content={title} />
        </div>
    </section>
  )
}

export default FAQ