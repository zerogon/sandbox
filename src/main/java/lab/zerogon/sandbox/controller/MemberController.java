package lab.zerogon.sandbox.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
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
	public String list(Model model, @RequestParam(name = "page", defaultValue = "0") int page) {
		// List<Member> members = memberService.findMembers();
		Pageable pageable = PageRequest.of(page, 3, Sort.by(Sort.Direction.DESC, "regdate"));
		Page<Member> members = memberService.findPageMembers(pageable);
		model.addAttribute("members", members);
		return "member/members";
	}
	
	@GetMapping(value = "/new")
	public String createForm() {
		return "member/createMemberForm";
	}
	
	@PostMapping(value = "/new") 
	public String create(Member member) {
		memberService.join(member);
		return "redirect:/members";
	}
	
    //  특정 회원 정보 조회  /members/{id} 
    @GetMapping("/{id}")
    public String read(@PathVariable("id") Long id, Model model) {
        Optional<Member> member = memberService.findOne(id);
        model.addAttribute("member", member.get());
        return "member/memberDetail"; 
    }
    
    // PUT - 회원 정보 수정 처리
    @PutMapping("/{id}")
    public String update(@PathVariable("id") Long id, Member formMember,
    		RedirectAttributes redirectAttributes) {
    	memberService.updateMember(id, formMember);
        //redirectAttributes.addFlashAttribute("message", "회원 정보가 수정되었습니다.");
        return "redirect:/members";
    }
    
    // DELTE - 회원삭제
    @DeleteMapping("/{id}")
    @ResponseBody
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
    	System.out.println("진입");
        memberService.deleteMember(id);
        return ResponseEntity.ok().build();
    }
	
}
