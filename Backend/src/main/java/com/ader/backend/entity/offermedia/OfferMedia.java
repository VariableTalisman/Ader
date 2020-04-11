package com.ader.backend.entity.offermedia;

import com.ader.backend.entity.BaseEntity;
import com.ader.backend.entity.offer.Offer;
import lombok.*;

import javax.persistence.*;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "offermedia")
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
@SequenceGenerator(name = "generic_gen", sequenceName = "offermedia_seq", allocationSize = 1)
public class OfferMedia extends BaseEntity {

    @ManyToOne
    @JoinColumn
    private Offer offer;

    @Column(unique = true, nullable = false)
    private String path;
}
