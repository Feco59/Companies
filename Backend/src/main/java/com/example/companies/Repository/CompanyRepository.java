package com.example.companies.Repository;

import com.example.companies.Models.Company;
import org.springframework.data.repository.CrudRepository;

public interface CompanyRepository extends CrudRepository<Company,Long> {
    Company findByID(Long ID);
}
