// GET /members/{id} (Path Variable 방식)
function loadDetailModal(targetId, baseUrl, id) {
	const url = `${baseUrl}/${id}`;
	$(`#${targetId}`).show();

	$(`#${targetId}`).load(url);
	$(`#${targetId}`).draggable();
}

// GET /members?id=1 (Query Param 방식)
function loadDetailModalByQuery(targetId, baseUrl, params) {
    const query = new URLSearchParams(params).toString();
    const url = `${baseUrl}?${query}`;
	$(`#${targetId}`).show();

    $(`#${targetId}`).load(url);
	$(`#${targetId}`).draggable();
}

/*
// 예시 1: 유저 상세
loadDetailModal('userDetail', '/api/user', { userId: 123, stdDt: '20250414' });

// 예시 2: 게시글 상세
loadDetailModal('postDetail', '/api/post/detail', { postId: 987 });

<tr th:each="member : ${members}"
	th:onclick="|loadDetailModal('memberDetail', '/members', ${member.id})|">

*/