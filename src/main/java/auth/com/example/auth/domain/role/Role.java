package auth.com.example.auth.domain.role;

import auth.com.example.auth.domain.user.User;
import auth.com.example.auth.domain.user.UserRole;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@Builder @AllArgsConstructor @NoArgsConstructor
@Table(name = "roles")
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private UserRole role;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
