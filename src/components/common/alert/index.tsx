import Swal from 'sweetalert2'

export const ConfirmButtonClick = () => {
  Swal.fire({
    title: '승인하시겠습니까?',
    text: '승인 후 취소할 수 없습니다.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d32727',
    cancelButtonColor: '#d34747',
    confirmButtonText: '예',
    cancelButtonText: '아니요',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: '신청!',
        text: `신청이 완료되었어요! 내역보기에서 확인해보세요 :)`,
        icon: 'success',
        confirmButtonColor: '#476FD3',
        confirmButtonText: '내역보기 페이지 바로가기',
      })
    }
  })
}
