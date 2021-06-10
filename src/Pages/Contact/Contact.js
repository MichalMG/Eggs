import { useState } from "react";
import HeaderPage from "../../components/Header/HeaderPage/HeaderPage";
import useWebTitle from "../../hooks/useWebTitle";

export default function Contact() {

  const setTitle = useWebTitle();
  setTitle("Kontakt");

  const [form, setForm] = useState({
    name: {
      value: '',
      valid: false,
      message: ''
    },
    phoneMail: {
      value: '',
      valid: false,
      message: ''
    },
    message: {
      value: '',
      valid: false,
      message: ''
    }
  });

  const btnHandler = Object.values(form).filter(el => el.valid === false).length !== 0;

  const formHandler = (value, type) => {

    setForm({ ...form, [type]: { ...form[type], value, message: value.length > 0 ? '' : 'Pole wymagane!', valid: value.length > 0 ? true : false } })

  }

  return (
    <>
      <HeaderPage />
      <div className="my-4 py-3 bg-light" >
        <h1 className="text-center text-myorange border-bottom border-1 border-myyellow pb-3">Zapraszamy do kontaktu</h1>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center mt-4 mt-lg-0 order-2 order-lg-1">
              <div>
                <p className="display-6">Dane firmy:</p>
                <p className="text-mydbl fw-bold fs-4 mb-2">Nazwa firmy</p>
                <p className="mb-1 text-mydbl fw-bold">ul. Przykładowa 12</p>
                <p className="mb-1 text-mydbl fw-bold">00-000 Warszawa</p>
                <p className="mb-1 text-mydbl fw-bold">NIP: 000 000 0000</p>
                <p className="mb-1 text-mydbl fw-bold">biuro@firma.pl</p>
                <p className="mb-1 text-mydbl fw-bold">+48 000 000 000</p>
              </div>
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-2">
              <div>
                <form>
                  <div className="row">
                    <div className="col-12 col-xl-6">
                      <div className="mb-3">
                        <input type="text" className={`form-control shadow-none ${form.name.message ? 'is-invalid' : ''} ${form.name.valid ? 'is-valid' : ''}`} placeholder="Imię" value={form.name.value} onChange={(e) => formHandler(e.target.value, "name")} required />
                        <div className="invalid-feedback">{form.name.message}</div>
                      </div>
                    </div>
                    <div className="col-12 col-xl-6">
                      <div className="mb-3">
                        <input type="text" className={`form-control shadow-none ${form.phoneMail.message ? 'is-invalid' : ''} ${form.phoneMail.valid ? 'is-valid' : ''}`} placeholder="Email/Telefon" value={form.phoneMail.value} onChange={e => formHandler(e.target.value, "phoneMail")} required />
                        <div className="invalid-feedback">{form.phoneMail.message}</div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea className={`form-control shadow-none ${form.message.message ? 'is-invalid' : ''} ${form.message.valid ? 'is-valid' : ''}`} placeholder="Wiadomość" id="floatingTextarea2" style={{ height: '150px' }} value={form.message.value} onChange={e => formHandler(e.target.value, "message")}></textarea>
                        <label className="text-muted" htmlFor="floatingTextarea2">Wiadomość</label>
                        <div className="invalid-feedback">{form.message.message}</div>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-outline-myorange mt-3" disabled={btnHandler}>Wyślij wiadomość</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="my-4">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d221110.49998026894!2d20.846354050525463!3d52.24421419675026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1623270664329!5m2!1spl!2spl" title="map" style={{ border: 'none', width: '100%', height: '40vh' }} allowFullScreen="" loading="lazy"></iframe>
        </div>
      </div>
    </>
  )
}