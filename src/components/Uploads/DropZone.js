import { IconButton } from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import Swal from 'sweetalert2'

export default function Dropzone({ files, setFiles }) {

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    // FILE WITH ERROR
    if (!!rejectedFiles.length) {
      let errors = ""
      rejectedFiles[0].errors.forEach(({ message }, idx) => {
        errors += `${idx + 1} ${message}. `
      })
      Swal.fire("Error", errors, "error")
    }

    setFiles(files => [...files, ...acceptedFiles])
  }, [setFiles])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop, accept: 'image/*, application/pdf', maxSize: 2000000
  })

  const handleRemoveFile = (removeFile) => (event) => {
    const filtered = files.filter(file => file.path !== removeFile.path);
    setFiles(filtered)
  }

  return (
    <>
      <div {...getRootProps()} style={style}>
        <input {...getInputProps()} />
        <p>Arrastra los archivos aquí o haz click para seleccionarlos</p>
      </div>
      <ul>
        {files.map((file, idx) => (
          <li key={idx}>
            {file.path} - {(file.size / 1024).toFixed(1)} kb
            <IconButton onClick={handleRemoveFile(file)}><Delete /></IconButton>
          </li>
        ))}
      </ul>
    </>
  )
}

const style = {
  padding: ".50rem",
  border: "2px dashed darkgrey",
  textAlign: "center",
  marginTop: "1rem",
  cursor: "pointer"
}