import axios from "axios";
import Swal from "sweetalert2";

const sendMail = async (files, mailInfo) => {
  try {
    const data = new FormData()

    files.forEach(file => {
      data.append(file.name, file)
    })

    data.append('mailInfo', JSON.stringify({ ...mailInfo, from: "teleorientacion.sura.21@gmail.com", password: "nyloltgekacrjkoj", from2: `Teleorientación SURA <teleorientacion.sura.21@gmail.com>` }))

    const res = await axios.post(`http://localhost:8080/api/mailer`, data)
    // const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/mailer`, data)
    Swal.fire("Éxito", res.data.msg, "success")
    return res.data
  } catch (error) {
    Swal.fire("Error", error.message, "error")
  }
}

export default sendMail;