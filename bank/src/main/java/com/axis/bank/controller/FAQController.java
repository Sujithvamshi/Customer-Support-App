package com.axis.bank.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

import com.axis.bank.repository.FAQRepository;
import com.axis.bank.model.FAQ;

@RestController
@RequestMapping("/faqs")
public class FAQController {

    @Autowired
    private FAQRepository faqRepository;

    @GetMapping
    public List<FAQ> getAllFAQs() {
        return faqRepository.findAll();
    }

    @PostMapping
    public FAQ createFAQ(@RequestBody FAQ faq) {
        return faqRepository.save(faq);
    }

    @PutMapping("/{id}")
    public FAQ updateFAQ(@PathVariable Long id, @RequestBody FAQ faq) {
        faq.setId(id);
        return faqRepository.save(faq);
    }

    @DeleteMapping("/{id}")
    public void deleteFAQ(@PathVariable Long id) {
        faqRepository.deleteById(id);
    }
}
