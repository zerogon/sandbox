package lab.zerogon.sandbox.repository;

import static org.assertj.core.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;

import lab.zerogon.sandbox.domain.Member;

class MemoryMemberRepositoryTest {

	MemoryMemberRepository memberRepo = new MemoryMemberRepository();

	@AfterEach
	public void afterEach() {
		memberRepo.clearStore();
	}

	@Test
	public void save() {
		Member member = new Member();
		member.setName("spring");
		memberRepo.save(member);
		Member result = memberRepo.findById(member.getId()).get();
		assertThat(result).isEqualTo(member);
	}

	@Test
	public void findByName() {
		Member member1 = new Member();
		member1.setName("spring1");
		memberRepo.save(member1);

		Member member2 = new Member();
		member2.setName("spring2");
		memberRepo.save(member2);

		Member result = memberRepo.findByName("spring1").get();

		assertThat(result).isEqualTo(member1);
	}

	@Test
	public void findAll() {
		// given
		Member member1 = new Member();
		member1.setName("spring1");
		memberRepo.save(member1);
		Member member2 = new Member();
		member2.setName("spring2");
		memberRepo.save(member2);
		// when
		List<Member> result = memberRepo.findAll();
		// then
		assertThat(result.size()).isEqualTo(2);
	}
}
