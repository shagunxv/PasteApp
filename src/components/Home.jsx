
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { addToPaste, updateToPaste } from '../redux/pasteSlice'

const Home = () => {

  const [title, setTitle] = useState("")
  const [value, setValue] = useState("")

  const [searchParams, setSearchParams] = useSearchParams()

  const pasteId = searchParams.get("pasteId")

  const dispatch = useDispatch()

  const allPastes = useSelector(
    (state) => state.paste.pastes
  )

  useEffect(() => {

    if (pasteId) {

      const paste = allPastes.find(
        (p) => p._id === pasteId
      )

      if (paste) {
        setTitle(paste.title)
        setValue(paste.content)
      }

    }

  }, [pasteId, allPastes])


  function createPaste() {

    const paste = {

      title: title,

      content: value,

      _id:
        pasteId ||
        Date.now().toString(36) +
        Math.random()
          .toString(36)
          .substring(2),

      createdAt: new Date().toISOString(),

    }


    if (pasteId) {

      dispatch(updateToPaste(paste))

    } else {

      dispatch(addToPaste(paste))

    }


    setTitle("")
    setValue("")

    setSearchParams({})
  }


  return (

    <main className="home-container">

      <section className="paste-card">

        {/* Header */}

        <div className="paste-header">

          <div>

            <span className="eyebrow">
              ✦ PASTE & SHARE
            </span>

            <h1>
              Create a new paste
            </h1>

            <p>
              Store your code, notes and snippets in one place.
            </p>

          </div>

        </div>


        {/* Title + Button */}

        <div className="paste-toolbar">

          <input
            className="title-input"
            type="text"
            placeholder="Give your paste a title..."
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
          />

          <button
            className="create-btn"
            onClick={createPaste}
          >

            {pasteId
              ? "Update Paste"
              : "Create Paste"
            }

          </button>

        </div>


        {/* Editor */}

        <div className="editor-wrapper">

          <div className="editor-top">

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
            className="paste-editor"
            value={value}
            placeholder="Write or paste your content here..."
            onChange={(e) =>
              setValue(e.target.value)
            }
            rows={20}
          />

        </div>

      </section>

    </main>

  )
}

export default Home

