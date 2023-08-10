package com.axis.bank.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.axis.bank.model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
