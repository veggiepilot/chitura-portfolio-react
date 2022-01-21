function Contact() {
    return (
        <div className="contact">
            <div className="container">
                <div className="row align-items-center my-5">
                    <div className="col-lg-7">
                        <h1>Contact Me</h1>
                        <form>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Name</label>
                                <input type="input" class="form-control" id="exampleFormControlInput1" placeholder="John Doe"  required/>
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required/>
                            </div>
                                
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
                            </div>

                            <div class="col-auto">
                                <button type="submit" class="btn btn-primary mb-3">Submit</button>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Contact;