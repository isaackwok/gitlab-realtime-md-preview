/* main */
const mdFields = document.querySelectorAll(MD_FIELD_CLASSNAME)

mdFields.forEach((field) => {
    const inputArea = field.querySelector('textarea')
    inputArea.parentElement?.appendChild(createPreviewDiv(MD_PREVIEW_AREA_CLASS))
    inputArea.oninput = handleOnChangePreview
})