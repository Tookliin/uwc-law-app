export default {
  data() {
    return {
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      name: '',
      password: 'Password',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => ('The email and password you entered don\'t match'),
        name: [val => (val || '').length > 0 || 'This field is required']
      },
    }
  },
}
