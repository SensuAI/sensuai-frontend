const SmtextTitleText = (props:any) => {
    return (
        <section className="w-5/6 mx-auto p-8">
        <h2 className="text-sm font-bold text-gray-600 mx-auto">{props.legend}</h2>
        <div className="items-center justify-center h-1 w-20 bg-red-500 mb-4 mt-2"></div>
        <h1 className="text-4xl font-bold mb-4 mt-6">{props.title}</h1>
        <p className="mt-8">
          {props.text}
        </p>
      </section>
    )
}

export default SmtextTitleText;