export const Submit = () => {

    return (
        <>
            <div className='h-[400px] p-8 absolute right-[3%] bg-white w-[94%] mt-[100px] rounded-lg
            md:relative md:h-full md:py-8 md:my-0 md:mx-auto md:w-[580px] md:px-8 md-justify-self-center md:right-0'>
                
                <div className="w-auto h-full my-[50px] md:mx-0 md:my-[100px]">
                    <div className="flex justify-center items-center scale-[0.7]">
                        <img src="/multi-step-form-main/assets/images/icon-thank-you.svg" alt="" srcset="" />
                    </div>
                    <div className="flex justify-center items-center">
                        <h2 className='text-[#02295a] text-3xl font-bold mb-2'>Thank you!</h2>
                    </div>
                    <div className="flex items-center text-center">
                        <p className='font-normal text-gray-400 text-xl'>  Thanks for confirming your subscription! We hope you have fun 
                            using our platform. If you ever need support, please feel free 
                            to email us at support@loremgaming.com.</p>
                    </div>
                </div>
                
            </div>
        </>
    )
}