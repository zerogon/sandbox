package lab.zerogon.sandbox.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import lab.zerogon.sandbox.domain.Member;
import lab.zerogon.sandbox.repository.MemberRepository;

@Service
public class MemberService {
	private final MemberRepository memberRepository;
	
	@Autowired
	public MemberService(MemberRepository memberRepository) {
		this.memberRepository = memberRepository;
	}

	public Long join(Member member) {
	//	validateDuplicateMember(member); 중복회원 검증
		memberRepository.save(member);
		return member.getId();
	}
/*
	private void validateDuplicateMember(Member member) {
		memberRepository.findByName(member.getName()).ifPresent(m -> {
			throw new IllegalStateException("이미 존재하는 회원입니다.");
		});
	}
*/
	public List<Member> findMembers() {
		return memberRepository.findAll();
	}
	public Page<Member> findPageMembers(Pageable pageable) {
		return memberRepository.findAll(pageable);
	}

	public Optional<Member> findOne(Long memberId) {
		return memberRepository.findById(memberId);

	}
}
