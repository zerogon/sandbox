package lab.zerogon.sandbox.repository;

import java.util.Optional;

import lab.zerogon.sandbox.domain.Member;


/* 현재 안쓰는 코드
 * xxxMemberRepository 와 같이 구현체를 여러개 구현했을때 분리하면 장점
 * 현재는 MemberRepository 하나로 관리. 분리 하고싶을 시 주석 해제하고 memberrepository에 필요한 메서드 정의

public interface SpringDataJpaMemberRepository extends JpaRepository<Member, Long>, MemberRepository {
	Optional<Member> findByName(String name);
}
*/
public interface SpringDataJpaMemberRepository  {
	Optional<Member> findByName(String name);
}