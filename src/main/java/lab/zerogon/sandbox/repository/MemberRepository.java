package lab.zerogon.sandbox.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import lab.zerogon.sandbox.domain.Member;

public interface MemberRepository {
	Member save(Member member);

	Optional<Member> findById(Long id);

	Optional<Member> findByName(String name);

	List<Member> findAll();
	
	Page<Member> findAll(Pageable pageable);
}