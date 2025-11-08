package lab.zerogon.sandbox.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import lab.zerogon.sandbox.domain.Member;

public interface MemberRepository extends JpaRepository<Member, Long> {
	Optional<Member> findByName(String name);
}