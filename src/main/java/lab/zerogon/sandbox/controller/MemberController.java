package lab.zerogon.sandbox.controller;

import java.util.Optional;

import org.hibernate.internal.build.AllowSysOut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import lab.zerogon.sandbox.domain.Member;
import lab.zerogon.sandbox.service.MemberService;

@Controller
@RequestMapping("/members")
public class MemberController {
	private final MemberService memberService;

	@Autowired
	public MemberController(MemberService memberService) {
		this.memberService = memberService;
	}

	@GetMapping
	public String members(Model model, @PageableDefault(size = 3) Pageable pageable) {
		// List<Member> members = memberService.findMembers();
		Page<Member> members = memberService.findPageMembers(pageable);
		model.addAttribute("members", members);
		return "member/members";
	}
	
	@GetMapping(value = "/new")
	public String createMemberForm() {
		return "member/createMemberForm";
	}
	
	@PostMapping(value = "/new") 
	public String createMember(Member member) {
		memberService.join(member);
		return "redirect:/members";
	}
	
    //  특정 회원 정보 조회  /members/{id} 
    @GetMapping("/{id}")
    public String member(@PathVariable("id") Long id, Model model) {
        Optional<Member> member = memberService.findOne(id);
        model.addAttribute("member", member.get());
        return "member/memberDetail"; 
    }
    
    // PUT/PATCH - 회원 정보 수정 처리
    @PutMapping("/{id}")
    public String updateMember(@PathVariable("id") Long id, Member formMember,
    		RedirectAttributes redirectAttributes) {
    	memberService.updateMember(id, formMember);
        //redirectAttributes.addFlashAttribute("message", "회원 정보가 수정되었습니다.");
        return "redirect:/members";
    }
	/*
	 * 


    // DELETE /users/{id} - 회원 삭제
    @PostMapping("/{id}/delete")
    public String delete(@PathVariable Long id, RedirectAttributes redirectAttributes) {
        memberService.delete(id);
        redirectAttributes.addFlashAttribute("message", "회원이 삭제되었습니다.");
        return "redirect:/users";
    }
	 */
	
}
