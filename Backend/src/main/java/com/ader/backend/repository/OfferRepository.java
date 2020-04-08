package com.ader.backend.repository;

import com.ader.backend.entity.offer.Offer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OfferRepository extends JpaRepository<Offer, Long> {
}
