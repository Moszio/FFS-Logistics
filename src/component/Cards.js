function Cards() {
  return (
    <div className='container-fluid'>
      <div>
        <div className='card-body'>
          <div className='row m-0 pt-5'>
            <div className='card col-12 col-md-3'>
              <div className='card-content'>
                <i className='fas fa-handshake fa-3x'></i>
                <div className='card-title'>RELIABLE</div>
                <p>
                  <small>We are keen to deliver the best service.</small>
                </p>
              </div>
            </div>
            <div className='card col-12 col-md-3'>
              <div className='card-content'>
                <i className='fas fa-shipping-fast fa-3x'></i>
                <div className='card-title'>FAST RESPONSE</div>
                <p>
                  <small>Always ready to answer your questions.</small>
                </p>
              </div>
            </div>
            <div className='card col-12 col-md-3'>
              <div className='card-content'>
                <i className='fas fa-mobile-alt fa-3x'></i>
                <div className='card-title'>INFORMATIVE</div>
                <p>
                  <small>Detailed and consistent information.</small>
                </p>
              </div>
            </div>
            <div className='card col-12 col-md-3'>
              <div className='card-content'>
                <i className='fas fa-hourglass fa-3x'></i>
                <div className='card-title'>SAVE TIME</div>
                <p>
                  <small>Get in touch with just a few clicks.</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
