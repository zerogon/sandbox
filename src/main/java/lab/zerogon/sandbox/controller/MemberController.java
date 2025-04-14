package lab.zerogon.sandbox.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import lab.zerogon.sandbox.domain.Member;
import lab.zerogon.sandbox.service.MemberService;

@Controller
public class MemberController {
	private final MemberService memberService;

	@Autowired
	public MemberController(MemberService memberService) {
		this.memberService = memberService;
	}

	@GetMapping(value = "/members")
	public String members(Model model, @PageableDefault(size = 3) Pageable pageable) {
		// List<Member> members = memberService.findMembers();
		Page<Member> members = memberService.findPageMembers(pageable);
		model.addAttribute("members", members);
		return "member/members";
	}
	
	@GetMapping(value = "/members/new")
	public String createMemberForm() {
		return "member/createMemberForm";
	}
	
	@PostMapping(value = "/members/new") 
	public String createMember(Member member) {
		memberService.join(member);
		return "redirect:/members";
	}
	
}
