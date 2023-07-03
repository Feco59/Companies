package com.example.companies.Services;

import com.example.companies.Models.Company;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public interface CompanyService {
    List<Company> findAll();
    Optional<Company> findById(Long ID);
}
