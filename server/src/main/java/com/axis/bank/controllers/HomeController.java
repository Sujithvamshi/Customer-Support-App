package com.axis.bank.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.axis.bank.entities.User;
import com.axis.bank.services.UserService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/home")
public class HomeController {

    @Autowired
    private UserService userService;

    @GetMapping
    public String home(){
        return "Welcome to GET home !!";
    }
    @PostMapping
    public String posthome(){
        return "Welcome to POST home !!";
    }
    @GetMapping("/users")
    public List<User> users(){
        return this.userService.getUsers();
    }

    @GetMapping("/admin")
    public String admin(){
        return "Hello Admin!";
    }

}
