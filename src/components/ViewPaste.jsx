
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import { Copy } from 'lucide-react'

const ViewPaste = () => {

  const { id } = useParams()

  const allPastes = useSelector(
    (state) => state.paste.pastes
  )

  const paste = allPastes.find(
    (p) => p._id === id
  )

  if (!paste) {
    return (
      <div className="paste-not-found">
        <div className="not-found-icon">✦</div>

        <h2>Paste not found</h2>

        <p>
          This paste may have been deleted or doesn't exist.
        </p>
      </div>
    )
  }


  const handleCopy = () => {

    navigator.clipboard.writeText(
      paste.content
    )

    toast.success("Copied!")
  }


  return (

    <main className="view-paste-container">

      <section className="view-paste-card">

        {/* Header */}

        <div className="view-paste-header">

          <div>

            <span className="eyebrow">
              ✦ VIEW PASTE
            </span>

            <h1>
              {paste.title}
            </h1>

            <p>
              Your saved content
            </p>

          </div>


          <button
            className="copy-main-btn"
            onClick={handleCopy}
            title="Copy content"
          >
            <Copy size={17} />
            <span></span>
          </button>

        </div>


        {/* Code / Content viewer */}

        <div className="view-editor">

          <div className="view-editor-top">

            <div className="window-dots">

              <span className="dot pink"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>

            </div>

            <span className="editor-label">
              CONTENT
            </span>

          </div>


          <textarea
            className="view-content"
            value={paste.content}
            readOnly
            rows={20}
          />

        </div>


        {/* Footer */}

        <div className="paste-footer">

          <span>
            Created
          </span>

          <span className="footer-date">
            {new Date(
              paste.createdAt
            ).toLocaleString()}
          </span>

        </div>

      </section>

    </main>

  )
}

export default ViewPaste

