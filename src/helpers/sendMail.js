import axios from "axios";
import Swal from "sweetalert2";

const sendMail = async (files, mailInfo) => {
  const data = new FormData()

  files.forEach(file => {
    data.append(file.name, file)
  })

  data.append('mailInfo', JSON.stringify({ ...mailInfo, from2: `Teleorientación SURA <${mailInfo.from}>` }))

  // const res = await axios.post(`http://localhost:8080/api/mailer`, data)
  const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/mailer`, data)
  Swal.fire("Éxito", res.data.msg, "success")
  return res.data

}

export default sendMail;