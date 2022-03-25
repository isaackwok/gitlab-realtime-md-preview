/* Functions */
function handleOnChangePreview(e) {
  const { target } = e
  fetchMdPreview(target.value)
      .then(result => {
          const mdPreviewArea = target.parentElement?.querySelector(MD_PREVIEW_AREA_SELECTOR)
          setPreviewHTML(result.body, mdPreviewArea)
      })
}

function setPreviewHTML(html, element) {
  element.innerHTML = html
}

function getCsrfToken() {
  const csrfMetaTag = document.querySelector('meta[name="csrf-token"]')
  const csrfToken = csrfMetaTag.getAttribute('content')
  return csrfToken
}

function createPreviewDiv(className) {
  const newElement = document.createElement('div')
  newElement.className = className
  newElement.style.backgroundColor = '#cbe2f9'
  return newElement
}

function getApiBasepath(url) {
  return url.split('/-/')[0]
}

async function fetchMdPreview(text) {
  const response = await fetch(PREVIEW_API_URL, {
      method: 'POST',
      body: JSON.stringify({
          text
      }),
      headers: {
          'content-type': 'application/json',
          'accept': 'application/json, text/plain, */*',
          'x-csrf-token': getCsrfToken()
      }
  })
  const result = await response.json()
  return result
}