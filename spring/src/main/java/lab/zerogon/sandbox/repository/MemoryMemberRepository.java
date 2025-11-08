package lab.zerogon.sandbox.repository;

import java.util.*;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import lab.zerogon.sandbox.domain.Member;

/**
 * 현재 안쓰는 코드
 * 여러개의 구현체 테스트
 * 
 * 동시성 문제가 고려되어 있지 않음, 실무에서는 ConcurrentHashMap, AtomicLong 사용 고려 
 * 
 * implements MemberRepository 
 */
public class MemoryMemberRepository {
	private static Map<Long, Member> store = new HashMap<>();
	private static long sequence = 0L;

	public Member save(Member member) {
		member.setId(++sequence);
		store.put(member.getId(), member);
		return member;
	}

	public Optional<Member> findById(Long id) {
		return Optional.ofNullable(store.get(id));
	}

	public List<Member> findAll() {
		return new ArrayList<>(store.values());
	}

	public Optional<Member> findByName(String name) {
		return store.values().stream().filter(member -> member.getName().equals(name)).findAny();
	}

	public void clearStore() {
		store.clear();
	}

	public Page<Member> findAll(Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}
}