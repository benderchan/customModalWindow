$.removeFruit = (options) => {
  return new Promise((res, rej) => {
    const modal = $.modal({
      width: '400px',
      price: options.price,
      title: options.title,
      closable: false,
      onClose() {
        modal.destroy()
      },
      content: options.content,
      buttons: [
        {
          text: 'Cancel',
          type: 'secondary',
          handler() {
            modal.close()
            rej()
          },
        },
        {
          text: 'Delete',
          type: 'danger',
          handler() {
            modal.close()
            res()
          },
        },
      ],
    })
    setTimeout(() => modal.open(), 100)
  })
}
