package com.example.companies.Services;

import com.example.companies.Models.Company;
import com.example.companies.Repository.CompanyRepository;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class CompanyServiceImpl implements CompanyService{

    private final CompanyRepository companyRepository;

    public CompanyServiceImpl( CompanyRepository companyRepository) {
        this.companyRepository = companyRepository;
    }

    @Override
    public List<Company> findAll() {
        return (List<Company>) companyRepository.findAll();
    }

    @Override
    public Optional<Company> findById(Long Id) {
        return companyRepository.findById(Id);
    }
}

