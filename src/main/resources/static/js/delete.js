/*
사용방법 :

<button type="button"
  class="w3-button w3-red"
  th:onclick="|handleDelete('/members/${member.id}')|">삭제</button>   
*/
function handleDelete(url) {
    if (confirm("정말 삭제하시겠습니까?")) {
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
            if (response.ok) {
                alert("삭제되었습니다.");
                window.location.reload(); // 페이지 새로고침
            } else {
                alert("삭제 실패");
            }
        })
        .catch(error => {
            alert("에러 발생: " + error);
        });
    }
}
