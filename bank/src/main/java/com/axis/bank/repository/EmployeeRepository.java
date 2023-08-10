package com.axis.bank.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.axis.bank.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    // You can add custom query methods here if needed
}
