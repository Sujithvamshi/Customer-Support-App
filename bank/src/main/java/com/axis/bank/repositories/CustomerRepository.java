package com.axis.bank.repositories;
import org.springframework.data.jpa.repository.JpaRepository;

import com.axis.bank.entities.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
