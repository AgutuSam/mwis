const EmailForm = () => {
  return (
    <section className=" mx-auto flex items-center justify-center bg-blue-dark p-6">
      <div className="flex w-full max-w-[1300px] flex-col items-start justify-between gap-4 xl:flex-row xl:items-center">
        <div className="flex items-center justify-center gap-8">
          <img
            src="/img/mail.png"
            alt="mail"
            className="aspect-square h-[55px]"
          />
          <div className="text-[26px] font-semibold text-white">
            Sign Up to Get Latest Updates
          </div>
        </div>
        <form
          className="flex h-[102px] w-full flex-col items-center justify-center xs:h-[51px] xs:flex-row lg:w-[920px] xl:w-[620px]"
          action=""
          id="email-submission"
        >
          <input
            type="email"
            name=""
            id=""
            placeholder="Your email address"
            className="h-full w-full bg-white px-4 py-2.5 placeholder:text-center xs:placeholder:text-start"
            required
          />
          <button
            type="submit"
            className="h-full min-w-full bg-blue px-12 py-2.5 text-white xs:min-w-[150px]"
          >
            Sign up
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailForm;
