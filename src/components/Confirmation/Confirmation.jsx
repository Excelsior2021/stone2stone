import { initializeApp } from "firebase/app"
import { getStorage, ref, getDownloadURL } from "firebase/storage"
import "./Confirmation.scss"

const firebaseConfig = {
  apiKey: "AIzaSyDXMcQwV7_cHpg7HVhLHUEkjzpPnSFiyUE",
  authDomain: "stone2stone-e7618.firebaseapp.com",
  databaseURL:
    "https://stone2stone-e7618-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "stone2stone-e7618",
  storageBucket: "stone2stone-e7618.appspot.com",
  messagingSenderId: "513058325782",
  appId: "1:513058325782:web:da4c5cd83e4b4d06697c37",
}

const app = initializeApp(firebaseConfig)
const storage = getStorage(app)
const icsRef = ref(storage, "event.ics")

const Confirmation = () => {
  const handleDownload = async () => {
    try {
      const download = await getDownloadURL(icsRef)

      console.log(download)

      const xhr = new XMLHttpRequest()
      xhr.responseType = "blob"
      xhr.onload = event => {
        console.log(event)
        const blob = xhr.response
      }
      xhr.open("GET", download)
      xhr.send()
      console.log("work")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="confirmation">
      <div className="confirmation__content">
        <p className="confirmation__text">
          Thank you for confirming your registration for our virtual Happy Hour.
          You will receive a confirmation email of your registration shortly.
          Please add the event to your calendar.
        </p>
        <p className="confirmation__text">We hope to see you soon!</p>

        <button className="confirmation__button" onClick={handleDownload}>
          <a
            className="confirmation__link"
            href="https://firebasestorage.googleapis.com/v0/b/stone2stone-e7618.appspot.com/o/event.ics?alt=media&token=a8c880fb-1a19-412a-b566-3ffa4cc80754"
            rel="noopener noreferrer"></a>
          <img
            className="confirmation__icon"
            src="./calendar-icon.svg"
            alt="calendar icon"
          />
          Add to calendar
        </button>
      </div>
    </div>
  )
}

export default Confirmation
