package com.axis.bank.model;

import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.*;

@Entity
@Getter
@Setter
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String employeeId;
    private String email;
    private String name;
    private String contactDetails;
    private String branchLocation;
    private String password;
}
