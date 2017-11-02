package com.jhproj.repository;

import com.jhproj.domain.Preferences;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Preferences entity.
 */
@SuppressWarnings("unused")
@Repository
public interface PreferencesRepository extends JpaRepository<Preferences, Long> {

}
