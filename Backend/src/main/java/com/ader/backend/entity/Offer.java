package com.ader.backend.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "offers")
@Data
@NoArgsConstructor
@SequenceGenerator(name = "generic_gen", sequenceName = "offer_seq", allocationSize = 1)
public class Offer extends BaseEntity {

  @Column
  private String name;

  @Column
  private String description;

  @Column
  private Timestamp expireDate;

  @ManyToOne
  @JoinColumn
  @ToString.Exclude
  private User author;

  @ManyToMany
  @JoinTable(
          name = "offer_user",
          joinColumns = {
                  @JoinColumn(name = "offer_id", referencedColumnName = "id"),
          },
          inverseJoinColumns = {
                  @JoinColumn(name = "user_id", referencedColumnName = "id")
          }
  )
  @ToString.Exclude
  private Set<User> assignees;

  @OneToMany(mappedBy = "offer", cascade = CascadeType.ALL)
  @ToString.Exclude
  private List<Bid> bids;

  @ManyToMany
  @JoinTable(
          name = "offer_category",
          joinColumns = {
                  @JoinColumn(name = "offer_id", referencedColumnName = "id"),
          },
          inverseJoinColumns = {
                  @JoinColumn(name = "category_id", referencedColumnName = "id")
          }
  )
  private List<Category> categories = new ArrayList<>();

  @ToString.Exclude
  @OneToMany(mappedBy = "offer", cascade = CascadeType.ALL, orphanRemoval = true)
  private List<File> files;

  @ToString.Exclude
  @ManyToMany
  @JoinTable(
          name = "offer_adv_format",
          joinColumns = {
                  @JoinColumn(name = "offer_id", referencedColumnName = "id"),
          },
          inverseJoinColumns = {
                  @JoinColumn(name = "adv_format_id", referencedColumnName = "id")
          }
  )
  private List<AdvertisementFormat> advertisementFormats = new ArrayList<>();

  @Column
  private Boolean freeProductSample;

  @Column
  private Boolean advertisementReview;

  @Column
  private String compensation;

  @Enumerated(EnumType.STRING)
  private OfferStatus offerStatus = OfferStatus.OPEN;

  @Enumerated(EnumType.STRING)
  private Status status = Status.ACTIVE;
}
