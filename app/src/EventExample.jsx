const EventExample = () => {
    const handleButtonClick = (e) => {
      e.target.textContent = 'Ive been clicked';
    };
  
    const handleFormInput = (e) => {
      console.log(e.target.value, e.target.name);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form Submitted', e);
    };
  
    return (
      <section>
        <form onSubmit={handleSubmit}>
          <h2>Some Form</h2>
          <input
          type='text'
          name='example'
          onChange={(e) => {console.log(e.target.value, e.target.name)}}
          style={{margin: '1 rem 0'}} />
        </form>
        <button type="submit" onClick={handleButtonClick}>Click Me!</button>
      </section>
    )
}

export default EventExample;
