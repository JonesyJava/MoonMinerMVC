export default class NotificationService {
  static confirmNotification(title = 'Your work has been saved', icon = "success") {
    Swal.fire({
      position: 'top-end',
      icon: icon,
      title: title,
      toast: true,
      showConfirmButton: false,
      timer: 1500
    })
  }


}