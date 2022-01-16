const modal = $.modal({
  title: 'Title of modal',
  closable: true,
  content: `<h4> Modal window</h4>
	<p>My model content</p>`,
  width: '600px',
  buttons: [
    {
      text: 'Okay',
      type: 'primary',
      handler() {
        console.log('Okay clicked')
        modal.close()
      },
    },
    {
      text: 'Cancel',
      type: 'danger',
      handler() {
        console.log('Cancel clicked')
        modal.close()
      },
    },
  ],
})
