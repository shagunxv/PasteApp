
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removePaste } from '../redux/pasteSlice'
import toast from 'react-hot-toast'

const Paste = () => {

  const paste = useSelector(
    (state) => state.paste.pastes
  )

  const [searchItem, setSerachItem] = useState('')

  const dispatch = useDispatch()

  const filterData = paste.filter(
    (paste) =>
      paste.title
        .toLowerCase()
        .includes(searchItem.toLowerCase())
  )

  function handleDelete(pasteId) {
    dispatch(removePaste(pasteId))
  }

  const handleShare = (paste) => {

    navigator.clipboard.writeText(
      `${window.location.origin}/?pasteId=${paste._id}`
    )

    toast.success("Link copied!")
  }


  return (

    <main className="pastes-container">

      {/* Header */}

      <div className="pastes-header">

        <div>

          <span className="eyebrow">
            ✦ YOUR COLLECTION
          </span>

          <h1>
            Your Pastes
          </h1>

          <p>
            Manage, edit and share your saved snippets.
          </p>

        </div>

      </div>


      {/* Search */}

      <div className="search-wrapper">

        <span className="search-icon">
          🔍
        </span>

        <input
          className="paste-search"
          type="search"
          placeholder="Search your pastes..."
          value={searchItem}
          onChange={(e) =>
            setSerachItem(e.target.value)
          }
        />

      </div>


      {/* Paste List */}

      <div className="pastes-list">

        {filterData.length > 0 ? (

          filterData.map((paste) => (

            <article
              className="paste-item"
              key={paste?._id}
            >

              {/* Paste info */}

              <div className="paste-info">

                <div className="paste-title-row">

                  <span className="paste-dot"></span>

                  <h2>
                    {paste.title}
                  </h2>

                </div>

                <span className="paste-date">
                  {new Date(
                    paste.createdAt
                  ).toLocaleString()}
                </span>

              </div>


              {/* Actions */}

              <div className="paste-actions">

                <a
                  className="action-btn edit-btn"
                  href={`/?pasteId=${paste?._id}`}
                >
                  Edit
                </a>


                <a
                  className="action-btn view-btn"
                  href={`/pastes/${paste?._id}`}
                >
                  View
                </a>


                <button
                  className="action-btn delete-btn"
                  onClick={() =>
                    handleDelete(paste?._id)
                  }
                >
                  Delete
                </button>


                <button
                  className="action-btn copy-btn"
                  onClick={() => {

                    navigator.clipboard.writeText(
                      paste?.content
                    )

                    toast.success("Copied")
                  }}
                >
                  Copy
                </button>


                <button
                  className="action-btn share-btn"
                  onClick={() =>
                    handleShare(paste)
                  }
                >
                  Share
                </button>

              </div>

            </article>

          ))

        ) : (

          <div className="empty-state">

            <div className="empty-icon">
              ✦
            </div>

            <h2>
              No pastes found
            </h2>

            <p>
              Try a different search or create a new paste.
            </p>

          </div>

        )}

      </div>

    </main>

  )
}

export default Paste

