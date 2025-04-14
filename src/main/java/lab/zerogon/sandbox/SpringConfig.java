package lab.zerogon.sandbox;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import lab.zerogon.sandbox.repository.MemberRepository;
import lab.zerogon.sandbox.repository.MemoryMemberRepository;
import lab.zerogon.sandbox.service.MemberService;

@Configuration
public class SpringConfig {
	private final MemberRepository memberRepository;

	public SpringConfig(MemberRepository memberRepository) {
		this.memberRepository = memberRepository;
	}

	@Bean
	public MemberService memberService() {
		return new MemberService(memberRepository);
	}
/*
	@Bean
	public MemberRepository memberRepository() {
		return new MemoryMemberRepository();
		// 코드 수정없이 구현체 MySQLMemberRepository()만 변경가능
	}
*/
}